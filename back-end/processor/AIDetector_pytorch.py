import torch
from PIL import Image, ImageDraw, ImageFont
import numpy as np
from models.experimental import attempt_load
from utils.general import non_max_suppression, scale_coords, letterbox
from utils.torch_utils import select_device
import cv2
from random import randint


def cv2ImgAddText(img, text, left, top, textColor=(0, 255, 0), textSize=20):
    if (isinstance(img, np.ndarray)):  # 判断是否OpenCV图片类型
        img = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    # 创建一个可以在给定图像上绘图的对象
    draw = ImageDraw.Draw(img)
    # 字体的格式
    fontStyle = ImageFont.truetype(
        "font/simsun.ttc", textSize, encoding="utf-8")
    # 绘制文本
    draw.text((left, top), text, textColor, font=fontStyle)
    # 转换回OpenCV格式
    return cv2.cvtColor(np.asarray(img), cv2.COLOR_RGB2BGR)



class Detector(object):

    def __init__(self):
        self.img_size = 640
        self.threshold = 0.3
        self.max_frame = 160
        self.init_model()

    def init_model(self):

        self.weights = 'weights/best.pt'
        self.device ='cpu'
        self.device = select_device(self.device)
        model = attempt_load(self.weights, map_location=self.device)
        model.to(self.device).eval()
        model.float()
        # torch.save(model, 'test.pt')
        self.m = model
        self.names = model.module.names if hasattr(
            model, 'module') else model.names
        self.colors = [
            (randint(0, 255), randint(0, 255), randint(0, 255)) for _ in self.names
        ]

    def preprocess(self, img):

        img0 = img.copy()
        img = letterbox(img, new_shape=self.img_size)[0]
        img = img[:, :, ::-1].transpose(2, 0, 1)
        img = np.ascontiguousarray(img)
        img = torch.from_numpy(img).to(self.device)
        img = img.float()  # 半精度
        img /= 255.0  # 图像归一化
        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        return img0, img

    def plot_bboxes(self, image, bboxes, line_thickness=None):
        tl = line_thickness or round(
            0.002 * (image.shape[0] + image.shape[1]) / 2) + 1  # line/font thickness
        for (x1, y1, x2, y2, cls_id,name, conf) in bboxes:
            color = self.colors[self.names.index(cls_id)]
            c1, c2 = (x1, y1), (x2, y2)
            cv2.rectangle(image, c1, c2, color,
                          thickness=tl, lineType=cv2.LINE_AA)
            tf = max(tl - 1, 1)  # font thickness
            t_size = cv2.getTextSize(
                cls_id, 0, fontScale=tl / 3, thickness=tf)[0]

            c2 = c1[0] + t_size[0], c1[1] - t_size[1] - 3

            z1 = (x1+(x2-x1)//3,y1+(y2-y1)//2)
            z2 = z1[0] + 10, z1[1] - t_size[1] - 3
            print(c1)
            #cv2.rectangle(image, z1, z2, color, -1, cv2.LINE_AA)  # filled
            # cv2.putText(image, '{} ID-{:.2f}'.format(cls_id, conf), (c1[0], c1[1] - 2), 0, tl / 3,
            #             [225, 255, 255], thickness=tf, lineType=cv2.LINE_AA)
            cv2.putText(image, '{}'.format(name), (z1[0]+10,z1[1]), 0, 10,
                        [0, 0, 255], thickness=20, lineType=cv2.LINE_8)
            #cv2ImgAddText(image,"123123123", 500,500,(255, 255, 255), 30)
        return image

    def detect(self, im):

        global recommendation, label
        im0, img = self.preprocess(im)

        pred = self.m(img, augment=False)[0]
        pred = pred.float()
        pred = non_max_suppression(pred, self.threshold, 0.3)

        pred_boxes = []
        image_info = {}
        count = 0
        for det in pred:
            if det is not None and len(det):
                det[:, :4] = scale_coords(
                    img.shape[2:], det[:, :4], im0.shape).round()
                for *x, conf, cls_id in det:

                    lbl = self.names[int(cls_id)] #lbl代表的是输出的类别
                    if lbl=="Healthy":
                        recommendation = "无"
                        label = "健康"
                    elif lbl == "Virus":
                        recommendation = "分批提取，处理病蚕"
                        label = "疑似为血液性脓病"
                    elif lbl == "Fungus":
                        recommendation = "清理蚕袋，彻底消毒"
                        label = "疑似为微粒子疾病"

                    if np.round(float(conf), 3) >= 0.3 and np.round(float(conf), 3) < 0.33:
                        recommendation = "建议重新拍摄"
                        label = "该摄片不准,建议重拍!"
                    #else lbl ==
                    x1, y1 = int(x[0]), int(x[1])
                    x2, y2 = int(x[2]), int(x[3])
                    pred_boxes.append(
                        (x1, y1, x2, y2, lbl,str(count+1), conf))
                    count += 1
                    key = '{}-{:02}'.format(lbl, count)
                    image_info["第"+str(count)+"只"+"蚕"] = [label,recommendation]
            else:
                image_info["无"] = ["无", "建议重新拍照上传","建议重新拍照上传"]

        im = self.plot_bboxes(im, pred_boxes)
        return im, image_info

if __name__ == '__main__':
    yolo5 = Detector()
    x = "C:\\Users\\lizhilin\\Documents\\Tencent Files\\798772796\\FileRecv\\3.jpg"
    x = cv2.imread(x)
    img_y, image_info = yolo5.detect(x)
    print(image_info)
    cv2.imshow('./tmp/draw/{}.{}', img_y)
    cv2.waitKey()
    print()
