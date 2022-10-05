import os


def pre_process(data_path):
    # print(data_path)
    file_name = os.path.split(os.path.splitext(data_path)[0])[1]
    return data_path, file_name
