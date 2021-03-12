import React from "react";
import TextInput from './common/TextInput'
function CourseForm(props) {
  return (
    <form onSubmit = {props.onSubmit}>
      <TextInput
 
            id="title"
            label="Title"
            onChange={props.onChange}
            name="title"
            className="form-control"
            value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            onChange={props.onChange}
            name="authorId"
            value={props.course.authorId || ''}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>


          <TextInput
            type="text"
            label="Category"
            onChange={props.onChange}
            name="category"
            className="form-control"
            value={props.course.category}
          />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
