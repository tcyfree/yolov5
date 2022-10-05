import cv2
import numpy as np

from classification import Classification
from PIL import Image
import numpy

def predict(dataset, model, ext):

    global img_y

    CLS = Classification()

    x = dataset[0].replace('\\', '/')
    file_name = dataset[1]
    # print(x)
    # print(file_name)

    step1_img = Image.open(x)
    # step2_img = np.array(step1_img)
    step2_img = cv2.imread(x)

    if CLS.detect_image(step1_img):
        img_y, image_info = model.detect(step2_img)
    else:
        img_y, image_info = model.out(step2_img)

    cv2.imwrite('./tmp/draw/{}.{}'.format(file_name, ext), img_y)
        #raise Exception('保存图片时出错.Error saving thepicture.')

    return image_info