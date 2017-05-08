import React, {Component} from 'react';
//reduxForm is used to talk with formReducer
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    //... this is an object here, want all the properties, event handlers to be communicated as props to the input tab
                    {...field.input}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form>
                    <Field
                        label="Title"
                        //name - what state is the user editing
                        name="title"
                        component={this.renderField}
                    />
                    <Field
                        label="Tags"
                        name="tags"
                        component={this.renderField}
                    />
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    //Name of the form
    form: 'PostsNewForm'
})(PostsNew);

