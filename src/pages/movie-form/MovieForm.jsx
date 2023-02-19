import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
import { addMovieApi } from "services/movie";
import { GROUP_ID } from "constants";

export default function MovieForm() {
  const [file, setFile] = useState();

  const [imagePreview, setImagePreview] = useState();

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleFinish = async (values) => {
    values.ngayKhoiChieu = values.ngayKhoiChieu.format("DD/MM/YYYY");
    const formData = new FormData();
    formData.append("maNhom", GROUP_ID);
    formData.append("tenPhim", values.tenPhim);
    formData.append("moTa", values.moTa);
    formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
    formData.append("sapChieu", values.sapChieu);
    formData.append("dangChieu", values.dangChieu);
    formData.append("hot", values.hot);
    formData.append("danhGia", values.danhGia);
    formData.append("File", file, file.name);
    console.log(formData);
    await addMovieApi(formData);
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); //đọc file

    reader.onload = (event) => {
      // call back sau khi file đc dọc xong
      //   console.log(event.target.result);
      setImagePreview(event.target.result);
    };
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        sapChieu: true,
        dangChieu: true,
        hot: true,
        danhGia: 5,
      }}
      onFinish={handleFinish}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên Phim" name="tenPhim">
        <Input />
      </Form.Item>

      <Form.Item label="Trailer" name="trailer">
        <Input />
      </Form.Item>

      <Form.Item label="Mô Tả" name="moTa">
        <Input />
      </Form.Item>

      <Form.Item label="Ngày Khởi Chiếu" name="ngayKhoiChieu">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Đang Chiếu" valuePropName="checked" name="dangChieu">
        <Switch />
      </Form.Item>

      <Form.Item label="Sắp Chiếu" valuePropName="checked" name="sapChieu">
        <Switch />
      </Form.Item>

      <Form.Item label="Hot" valuePropName="checked" name="hot">
        <Switch />
      </Form.Item>

      <Form.Item label="Sao" name="danhGia">
        <InputNumber />
      </Form.Item>

      <Form.Item lable="Hình Ảnh">
        <Input onChange={handleFile} type="file" />
      </Form.Item>

      <Image src={imagePreview} />

      <Form.Item label="Tác Vụ">
        <Button htmlType="submit">Lưu</Button>
      </Form.Item>
    </Form>

    // image (base 64) file => giải mã thành 1 chuỗi
  );
}
