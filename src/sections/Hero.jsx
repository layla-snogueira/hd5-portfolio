import { Button, Input } from 'pixel-retroui'

function Hero() {
  return (
    <section className="mx-auto grid min-h-[460px] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
          Need a skilled senior engineer?
        </h1>

        <p className="mt-3 max-w-xl text-xl font-bold leading-snug">
          Delivering clean, scalable, and user-focused web solutions. Share your email!
        </p>

        <form className="mt-5 flex max-w-md items-center gap-4">
          <Input
            type="email"
            placeholder="Your e-mail"
            aria-label="Your email address"
            className="w-full"
            bg="white"
            borderColor="black"
          />

          <Button
            type="submit"
            bg="#5294ff"
            textColor="black"
            borderColor="black"
            shadow="#000"
          >
            Send
          </Button>
        </form>
      </div>

      <div className="overflow-hidden rounded-lg border-2 border-[#5294ff] bg-white">
        <div className="h-56 bg-white" />

        <div className="border-t-4 border-black bg-[#5294ff] px-7 py-5">
          <p className="font-bold">HD5_dev.JPG</p>
        </div>
      </div>
    </section>
  )
}

export default Hero