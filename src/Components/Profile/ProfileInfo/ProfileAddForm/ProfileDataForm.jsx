

import React from 'react'
import { useForm } from "react-hook-form";
import s from "./ProfileDataForm.module.css"

const ProfileDataForm = ({ profile }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
       <div>
       Facebook<input defaultValue="facebook" {...register("facebook")} />
       </div>
       <div>
        <input defaultValue="website" {...register("website")} />
        </div>
        <div>
        <input defaultValue="vk" {...register("vk")} />
        </div>
        <div>
        <input defaultValue="twitter" {...register("twitter")} />
        </div>
        <div>
        <input defaultValue="instagram" {...register("instagram")} />
        </div>
        <div>
        <input defaultValue="youtube" {...register("youtube")} />
        </div>
        <div>
        <input defaultValue="github" {...register("github")} />
        </div>
        <div>
        <input defaultValue="mainLink" {...register("mainLink", { required: true })} />
        </div>
        
        {/* errors will return when field validation fails  */}
        {errors.mainLink && <span>This field is required</span>}
        
        <div className={s.buttonSubmit}><input type="submit" /></div>
      </form>
    );
  }
  

  export default ProfileDataForm