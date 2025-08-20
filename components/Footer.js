import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30 backdrop-blur-md">
      <Container>
        <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-white/70">
            Stanmore, London • <a className="underline" href="mailto:lab@egodent.co.uk">lab@egodent.co.uk</a><br/>
            <a className="underline" href="tel:+442033016323">0203 301 6323</a>
          </div>
          <div className="text-sm text-white/60 md:text-right">
            © {new Date().getFullYear()} EgoDent Lab. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
