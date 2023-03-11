from core import process, predict


def c_main(path, model, ext, age):
    image_data = process.pre_process(path)
    # print(image_data)
    image_info = predict.predict(image_data, model, ext, age)

    return image_data[1] + '.' + ext, image_info


if __name__ == '__main__':
    pass
