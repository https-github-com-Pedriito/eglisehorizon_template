import { Mail } from 'lucide-react'
export default function Contact () {
  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12 text-orange-800'>
          Nous Contacter
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-xl font-semibold mb-6 text-orange-700 '>
              Informations de Contact
            </h3>
            <div className='space-y-2'>
              <div className='flex gap-2'>
                {' '}
                <Mail  className='text-orange-800 font-semibold'/> contact@eglisehorizon.fr{' '}
              </div>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337217374372!2d2.548828315674016!3d48.62470897926571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5f1d6e7b4e8b7%3A0x2b1e1e1e1e1e1e1e!2s441%20Avenue%20Marguerite%20Perey%2C%2077127%20Lieusaint%2C%20France!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus'
                    width='100%'
                    height='300'
                    style={{ border: 0 }}
                    loading='lazy'
                    className='rounded-lg shadow-md'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-6 text-orange-700'>
              Envoyez-nous un message
            </h3>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Nom
                </label>
                <input type='text' className='input-field' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input type='email' className='input-field' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Message
                </label>
                <textarea rows={4} className='input-field'></textarea>
              </div>
              <button type='submit' className='btn-primary w-full'>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
