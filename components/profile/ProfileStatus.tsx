const ProfileStatus = ()=>{

  return (
    <>
    <section className="flex flex-col content-center text-center">
      <span className="text-2xl font-mono">Profile Status</span>
      <div className="text-xl ">
        <p>User ID: {localStorage.getItem('userEmail')}</p>
      </div>
    </section>
    </>
  )
}
export default ProfileStatus;