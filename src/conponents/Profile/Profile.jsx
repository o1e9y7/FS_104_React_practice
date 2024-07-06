import s from './Profile.module.css'
import clsx from 'clsx'
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";


const Profile = ({user}) => {
  return (
      <article className={s.wrapper}>
      <section className={s.userCard}>
        <div className={s.imageWrapper}>
          <img className={s.img} src={user.image} alt="face" />
        </div>
        <div className={s.content}>
            <h2>
            <FaUser className={s.icon}/> {user.lastName} {user.firstName}
          </h2>
          <p>Email: {user.email}</p>
          <p> Phone: <BsFillTelephoneFill className={s.userPhone}/> {user.phone}</p>
          <p className={clsx(user.age > 18 ? s.green : s.red)}> Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>
            address:
            <svg xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="16"
             viewBox="0 0 24 24"
             fill="none"
             stroke="#5d5cb7"
             stroke-width="3.75"
             stroke-linecap="round"
             stroke-linejoin="round"
             class="lucide lucide-armchair">
              <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
              <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/>
              <path d="M5 18v2"/><path d="M19 18v2"/>
              </svg>
              {user.address.city} {user.address.address}
            </p>
        </div>
      </section>
    </article>
  )
}

export default Profile
