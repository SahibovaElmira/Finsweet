import React from 'react'
import Brands from '../brands/page'

const ContactInput = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Bizimlə əlaqə saxlayın</h1>
      <p className='text-blue-700'>Əməkdaşlıq etməkdə maraqlısınız? Zəhmət olmasa aşağıdakı formanı doldurun.</p>
      <div>
      <form action="/action_page.php" method="POST">
        <label htmlFor="fname">Adınız</label><br />
        <input type="text" id="fname" name="fname" defaultValue="Elmira" /><br />
        <label htmlFor="email">E-mail daxil edin</label><br />
        <input type="email" id="email" name="email" />
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div>
        <Brands />
    </div>
    </div>
  )
}

export default ContactInput
