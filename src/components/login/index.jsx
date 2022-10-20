import { Controller, useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import { Link } from 'react-router-dom'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()
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
            <div><p>You dont have an Account ? <Link to  = "../signup"><span>Sign up</span></Link></p></div>
      <div className="submit text-center ">
        <Button className="mt-5  " variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  )
}

export default Login
