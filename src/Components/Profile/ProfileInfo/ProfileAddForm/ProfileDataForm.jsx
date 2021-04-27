

import Checkbox from './checkbox';
import React from 'react'
import { useForm } from "react-hook-form";
import s from "./ProfileDataForm.module.css"


const ProfileDataForm = ({profile,  saveProfile} ) => {
  debugger
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  //const onSubmit = data => console.log(data);
  const onSubmit = data => saveProfile(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div><b>AboutMe</b>
        <input defaultValue={profile.aboutMe} {...register("AboutMe", { required: true })} />
      </div>
      <div><b>LookingForAJobDescription</b>
        <input defaultValue={profile.lookingForAJobDescription} {...register("LookingForAJobDescription", { required: true })} />
      </div>
      <div><b>Full Name</b>
        <input defaultValue={profile.fullName} {...register("FullName", { required: true })} />
      </div>

      {errors.fullname && <span>This fullname is required</span>}
      <div>
        <b>lookingForAJob</b>
      </div>
      {/*       
      <div>
        <b>Facebook</b><input defaultValue="facebook" {...register("facebook", { required: true })} />
      </div>
      <div><b>website</b>
        <input defaultValue="website" {...register("website", { required: true })} />
      </div>
      <div><b>vk</b>
        <input defaultValue="vk" {...register("vk", { required: true })} />
      </div>
      <div><b>twitter</b>
        <input defaultValue="twitter" {...register("twitter", { required: true })} />
      </div>
      <div><b>instagram</b>
        <input defaultValue="instagram" {...register("instagram", { required: true })} />
      </div>
      <div><b>youtube</b>
        <input defaultValue="youtube" {...register("youtube", { required: true })} />
      </div>
      <div><b>github</b>
        <input defaultValue="github" {...register("github", { required: true })} />
      </div>
      <div><b>mainLink</b>
        <input defaultValue="mainLink" {...register("mainLink", { required: true })} />
      </div>

      {/* errors will return when field validation fails  
      {errors.mainLink && <span>This field is required</span>} */}
      <Checkbox control={control} />
      <div className={s.buttonSubmit}><input type="submit" /></div>
    </form>
  );
}


export default ProfileDataForm