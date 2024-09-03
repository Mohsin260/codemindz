import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button variant="" className="w-full animate-pulse">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <p>Email: contact@codemindz.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
