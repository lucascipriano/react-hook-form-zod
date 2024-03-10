import { useForm } from "react-hook-form";
import { formData, formSchema } from "../schemas/zod-schemas";
import {zodResolver} from '@hookform/resolvers/zod'

export function FormBolado() {
  const {register, handleSubmit, formState:{errors}} = useForm<formData>({
    resolver: zodResolver(formSchema)
  }
  )
  function createUser(data: formData){
   console.log( JSON.stringify(data))

  }
  console.log(errors)

  return (
    <>
      <div className="app-container">
        <div className="form-group">
          <label>Name</label>
          <input
           className={errors?.name && "input-error"}
           type="text" placeholder="Your name" {...register('name')}/>
         {errors.name &&(
          <p className="error-message">{errors.name.message}</p>
         )}
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input  className={errors?.email && "input-error"} type="email" placeholder="Your e-mail" {...register('email')} />
          {errors.email &&(
          <p className="error-message">{errors.email.message}</p>
         )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input  className={errors?.password && "input-error"} type="password" placeholder="Password" {...register('password')}/>
          {errors.password &&(
          <p className="error-message">{errors.password.message}</p>
         )}
        </div>

        <div className="form-group">
          <label>Password confirmation</label>
          <input  className={errors?.passwordConfirm && "input-error"} type="password" placeholder="Repeat your password" {...register('passwordConfirm')}/>
          {errors.passwordConfirm &&(
          <p className="error-message">{errors.passwordConfirm.message}</p>
         )}
        </div>
        <div className="form-group">
          <label>Profession</label>
          <select  className={errors?.profession && "input-error"} {...register('profession')}>
            <option value="zero">Select your profession...</option>
            <option value="developer">Developer</option>
            <option value="other">Other</option>
          </select>
          {errors.profession &&(
          <p className="error-message">Selecione um campo</p>
         )}
        </div>

        <div className="form-group">
          <div className="checkbox-group" >
            <input type="checkbox"  className={errors?.privacyPolicy && "input-error"}  {...register("privacyPolicy")}  />
            <label >I agree with the privacy terms.</label>
            {errors.privacyPolicy &&(
          <p className="error-message">{errors.privacyPolicy.message}</p>
         )}
          </div>
        </div>

        <div className="form-group">
          <button onClick={() =>handleSubmit(createUser)()}>Criar conta</button>
        </div>
      </div>
    </>
  );
}
