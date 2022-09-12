import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "./components/Button";
import axios from "axios";
import "./UploadFiles.css";
import InNavbar from './InNavbar';
 const UploadFiles = () => {
 
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selected file",selectedFile);
    console.log(formData)
    try {
      const response = axios({
        method: "post",
        url: "/api/users/addDocument",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
  <>
  <InNavbar />
    <div className="frame">
	<div className="center">
		<div className="title">
			<h1>Drop file to upload</h1>
		</div>

		<div className="dropzone" >
			<img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" alt='uploadimg' />
			<input type="file" className="upload-input" onChange={handleFileSelect} />
		</div>
	</div>
    <Button onClick={handleSubmit}>Upload file</Button>

</div>
</>
  )
}
export default UploadFiles;
/*
UploadFiles.propTypes = {
  Upload: PropTypes.func.isRequired,
 // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { Upload }
)(UploadFiles);*/