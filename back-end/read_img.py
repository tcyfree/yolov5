# import cv2
#
# from PIL import Image
#
# x = "D:\\Projects\\yolov5-5.0\\data\\images\\sw2.png"
#
# img_cv2 = cv2.imread(x)
# print(type(img_cv2))
#
# img_Image = Image.open(x)
# print(type(img_Image))


# a = [None,1,2,3,4,5]
#
# print(a[:-1])
#
# print(a[:-2])
#
# print(a[0:-1])
import numpy as np

A = np.array([[1,2],[3,4]])
B = np.array([[3,0],[0,6]])

print(A*B)
print(np.dot(A,B))