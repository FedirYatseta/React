import Checkbox from './checkbox';
import React from 'react'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import s from "./ProfileDataForm.module.css"

const ProfileDataForm = ({ profile, saveProfile, setEditMode }) => {
  debugger
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm({
    defaultValues: {
      contacts: [{
        facebook: profile.contacts.facebook,
        github : profile.contacts.github,
        youtube : profile.contacts.youtube,
        twitter : profile.contacts.twitter,
        instagram : profile.contacts.instagram
        
      }]

      
    }
  }

  );
  //const onSubmit = data => console.log(data);
   const onSubmit = data => {
     saveProfile(data);
     setEditMode(false)};
  const { fields } = useFieldArray(
    {
      control,
      name: "contacts"
    }
  );
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
      <Checkbox control={control} />

        {fields.map((item) => {
          return (
            <div key={item.id}>
              <span>facebook</span>
              <input 
                defaultValue={`${item.facebook}`} // make sure to set up defaultValue
                {...register(`contacts.facebook`)}
              />
               <span>github</span>
               <input
                defaultValue={`${item.github}`} // make sure to set up defaultValue
                {...register(`contacts.github`)}
              />
               <span>youtube</span>
               <input
                defaultValue={`${item.youtube}`} // make sure to set up defaultValue
                {...register(`contacts.youtube`)}
              />
               <span>twitter</span>
               <input
                defaultValue={`${item.twitter}`} // make sure to set up defaultValue
                {...register(`contacts.twitter`)}
              />
               <span>instagram</span>
               <input
                defaultValue={`${item.instagram }`} // make sure to set up defaultValue
                {...register(`contacts.instagram`)}
              />

            </div>
          );
        })}
      <div className={s.buttonSubmit}><input type="submit" /></div>
    </form>
  );
}


export default ProfileDataForm