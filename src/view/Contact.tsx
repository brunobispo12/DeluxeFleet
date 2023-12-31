import React from 'react'

function Contact() {
    return (
        <section className='flex flex-col items-center gap-4'>
            <h2 className="font-inter-bold text-xl" id='contact'>Contact</h2>
            <div className='border border-primary w-4/6 h-72 px-8 py-3'>
                <form className='flex gap-8 h-[88%] font-robotoMono-lightitalic'>
                    <div className='flex flex-col gap-4'>
                        <label>
                            <p>Name:</p>
                            <input type="text" className='border px-1 border-primary bg-primary' />
                        </label>
                        <label>
                            <p>E-mail:</p>
                            <input type="text" className='border px-1 border-primary bg-primary' />
                        </label>
                    </div>
                    <label className='w-full h-full'>
                        <p>Subject:</p>
                        <textarea name="subject" id="subject" className='border p-1 w-full h-full text-sm border-primary bg-primary'></textarea>
                    </label>
                </form>
            </div>
        </section>
    )
}

export default Contact