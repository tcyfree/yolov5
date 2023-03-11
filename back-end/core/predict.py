import cv2
import numpy as np
import os
from classification import Classification
from PIL import Image
import numpy

def compress_images(infile,outfile,mb=350,step=10, quality=80):
    image_size = os.path.getsize(infile)/1024
    im = Image.open(infile)
    if image_size <= mb:
        return im.save(outfile)
    while image_size > mb:
        im.save(outfile, quality=quality)
        if quality - step < 0:
            break
        quality -= step
        image_size = os.path.getsize(outfile)/1024


def predict(dataset, model, ext, age):

    global img_y
    CLS = Classification()

    x = dataset[0].replace('\\', '/')
    file_name = dataset[1]

    if str(ext) != 'jpg':
        ext = 'jpg'

    step1_img = Image.open(x)
    # step2_img = np.array(step1_img)
    step2_img = cv2.imread(x)

    if CLS.detect_image(step1_img):
        img_y, image_info = model.detect(step2_img, age)
    else:
        img_y, image_info = model.out(step2_img)

    cv2.imwrite('./tmp/draw/{}.{}'.format(file_name, ext), img_y)
        #raise Exception('保存图片时出错.Error saving thepicture.')
        
    filename = '{}.{}'.format(file_name, ext)
    infile = os.path.join('./tmp/draw', filename)
    outfile = './tmp/comp/{}'.format(filename)
    
    compress_images(infile,outfile)

    return image_info