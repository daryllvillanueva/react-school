import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { InputText } from '../../../../helpers/FormInputs'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

const ModalAddStaff = ({setAddStaff}) => {
    const handleAddStaff = () => setAddStaff(false);
    const initVal = {
        staff_name: "",
        staff_class: "",
        staff_age: ""
    }

    const yupSchema = Yup.object({
        staff_name: Yup.string().required("Required ito"),
        staff_class: Yup.string().required("Required ito").email("Invalid Email!"),
        staff_age: Yup.number().required("Required ito"),
    })

  return (
    <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 relative"> 
                <h2>New Teacher</h2>
                <button className='absolute top-[23px] right-4' onClick={handleAddStaff}><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4">
                <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit= {async (values) => {
                        console.log(values)
                    }}
                >
                    <Form action="" className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            <div className="input-wrap">
                                <InputText
                                    label="Name"
                                    type="text"
                                    name="staff_name"
                                />
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Class"
                                    type="text"
                                    name="staff_class"
                                />
                            </div>

                            <div className="input-wrap">
                                <InputText
                                    label="Age"
                                    type="number"
                                    name="staff_age"
                                />
                            </div>

                            {/* <div className="input-wrap">
                                <label htmlFor="">Gender</label>
                                <select name="" id="">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <small className='error-msg'>Required*</small>
                            </div> */}
                        </div>

                        <div className="form-action">
                            <button className='btn btn--accent btn-form' type='submit'>Add <SpinnerButton/></button>
                            <button className='btn btn--cancel btn-form' type='button'>Cancel</button>
                        </div> 
                    </Form>
                </Formik>
            </div>
        </div>
    </ModalWrapper>
    
  )
}

export default ModalAddStaff