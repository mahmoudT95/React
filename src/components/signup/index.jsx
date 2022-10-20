import { Controller, useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()

  const gender = [
    {
      value: 1,
      label: 'male',
    },
    {
      value: 2,
      label: 'female',
    },
  ]
  const onSubmit = (data) => console.log(data)
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-25  m-auto mt-5">
      {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register('email', {
            required: true,
          })}
        />
        {console.log(errors)}
        {errors?.email?.type === 'required' && (
          <p className="text-danger"> email is required</p>
        )}
      </Form.Group>
      {/* //password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
            minLength: 6,
          })}
        />
        {errors?.password?.type === 'required' && (
          <p className="text-danger"> password is required</p>
        )}
        
        {errors?.password?.type === 'minLength' && (
          <p className="text-danger">
            
            The password must be at least 6 characters long
          </p>
        )}
      </Form.Group>

      {/* First Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="first name"
          {...register('fname', {
            required: true,
          })}
        />
        {console.log(errors)}
        {errors?.fname?.type === 'required' && (
          <p className="text-danger"> first name is required</p>
        )}
      </Form.Group>

      {/* last Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="last name"
          {...register('lname', {
            required: true,
          })}
        />
        {console.log(errors)}
        {errors?.lname?.type === 'required' && (
          <p className="text-danger"> last name is required</p>
        )}
      </Form.Group>

      {/* Phone Number */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="phone number"
          {...register('phone', {
            required: true,
          })}
        />
        {console.log(errors)}
        {errors?.phone?.type === 'required' && (
          <p className="text-danger">phone number is required</p>
        )}
      </Form.Group>

      {/* select */}
      <Form.Label>gender</Form.Label>
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select  options={gender} />
        )}
      />
      <div className="submit text-center ">
        <Button className="mt-5  " variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default Signup
