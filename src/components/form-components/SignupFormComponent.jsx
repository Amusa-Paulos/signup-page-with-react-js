import React from 'react'
import { Col, Form, FormGroup, Input, } from 'reactstrap'
import { Formik, } from 'formik';
import * as Yup from 'yup';
import { GoEye } from 'react-icons/go'

const validation = Yup.object({

    fullname: Yup.string()
        .min(1, 'Must be 1 characters or more')
        .required('Full name is required'),
    email: Yup.string().email('Please enter a valid email address').required('Email address is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    userType: Yup.string().required('Please select a user type')


})

function SignupFormComponent(props) {
    const handleWrapperClick = React.useCallback((event) => {
        event.currentTarget.querySelector('input').focus()
    }, [])

    const [passwordType, setPasswordType] = React.useState('password')

    const updatePasswordType = React.useCallback(() => {
        setPasswordType(prevState => prevState == 'password' ? 'text' : 'password')
    }, [])

    return (
        <Col xs="12" md="8">
            <Formik
                initialValues={{ fullname: '', email: '', password: '', userType: '' }}
                validationSchema={validation}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);

                }}>

                {({ isSubmitting, handleBlur, handleChange, 
                    values, touched, errors, isValid, handleSubmit }) => (


                    <Form className='pt-3' onSubmit={handleSubmit}>

                        <div class={`field-wrapper ${touched.fullname && values.fullname != "" ? " hasValue" : ""}` } 
                            onClick={handleWrapperClick}>
                            <input 
                                type="text" 
                                name="fullname" 
                                id="" 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.fullname}/>
                            <div class="field-placeholder">
                                <span>Your name</span>
                            </div>
                        </div>
                        {touched.fullname && errors.fullname ? (
                        <div className='error-container'>{errors.fullname}</div>) : null}

                        <div class={`field-wrapper ${touched.email && values.email != "" ? " hasValue" : ""}` } 
                            onClick={handleWrapperClick}>
                            <input 
                                type="email" 
                                name="email" 
                                id="" 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}/>
                            <div class="field-placeholder">
                                <span>Email address</span>
                            </div>
                        </div>
                        {touched.email && errors.email ? (
                        <div className='error-container'>{errors.email}</div>) : null}

                        <FormGroup className='text-secondary select-input'>
                            <Input
                                id="userType-select"
                                name="userType"
                                type="select"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.userType}
                            >
                            <option disabled selected value={''}>
                                I would describe my user type as
                            </option>
                            <option>
                                Admin
                            </option>
                            <option>
                                User
                            </option>
                            
                            </Input>
                        </FormGroup>
                        {touched.userType && errors.userType ? (
                        <div className='error-container'>{errors.userType}</div>) : null}

                        <div class={`field-wrapper mb-2 ${touched.password && values.password != "" ? " hasValue" : ""}` } 
                            onClick={handleWrapperClick} style={{position: 'relative'}}>
                            <input 
                                type={passwordType} 
                                name="password" 
                                id="" 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}/>
                            <div class="field-placeholder">
                                <span>Password</span>
                            </div>
                            <span className='view-pwd' onClick={updatePasswordType}>
                                <GoEye size={13} />
                            </span>
                        </div>
                        <div className='help-text'>
                          Minimum 8 characters
                        </div>
                        {touched.password && errors.password ? (
                        <div className='error-container'>{errors.password}</div>) : null}

                        <button type="submit" className={`submit-btn ${isValid && ' btn-primary'}`} 
                            disabled={!isValid || isSubmitting}>
                            {isSubmitting ? 'Processing...' : 'Next'}
                        </button>

                        <div className="terms-statement">
                            By clicking the "Next" button, you agree to creating a free account, and to 
                            <a href="/"> Terms of Service</a> and <a href="/"> Privacy Policy</a>
                        </div>
                    </Form>




                )}

                </Formik>

        </Col>
    )
}

export default React.memo(SignupFormComponent)