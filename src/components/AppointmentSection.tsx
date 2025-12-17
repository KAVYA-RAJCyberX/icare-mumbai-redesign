import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM", "05:30 PM", "06:00 PM",
];

const services = [
  "Post-Stroke Shoulder Pain",
  "Spasticity Management",
  "Cancer Pain",
  "USG-Guided Pain Management",
  "Regenerative Medicine (PRP)",
  "Spine Pain: Back & Neck",
  "Chronic Pelvic Pain",
  "Joint & Muscle Injuries",
  "Headache & Migraine",
  "Neuropathic Pain Relief",
  "Myofascial Pain Therapy",
  "Fibromyalgia Care",
  "Osteoarthritis Management",
  "Palliative Care",
  "Neurorehabilitation",
  "Other",
];

export const AppointmentSection = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !service || !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${format(date, "PPP")} at ${time}.`,
    });
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 bg-gradient-to-br from-teal-light via-background to-mint">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card rounded-3xl p-12 shadow-card"
          >
            <div className="w-20 h-20 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Appointment Confirmed!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you, {formData.name}! Your appointment has been scheduled for{" "}
              <strong className="text-foreground">{date && format(date, "PPP")}</strong> at{" "}
              <strong className="text-foreground">{time}</strong>.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to <strong>{formData.email}</strong>.
              Our team will contact you shortly to confirm the details.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                setIsSubmitted(false);
                setDate(undefined);
                setTime(undefined);
                setService(undefined);
                setFormData({ name: "", email: "", phone: "", message: "" });
              }}
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-teal-light via-background to-mint">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-card text-teal text-sm font-medium rounded-full mb-4 shadow-card">
            Book Online
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your consultation with Dr. Navita Purohit Vyas online. Choose your preferred date and time.
          </p>
        </motion.div>

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Personal info */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Personal Information
                </h3>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-teal" />
                    Full Name *
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl border-border focus:border-teal focus:ring-teal"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl border-border focus:border-teal focus:ring-teal"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-border focus:border-teal focus:ring-teal"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-teal" />
                    Additional Notes
                  </label>
                  <Textarea
                    placeholder="Describe your symptoms or any specific concerns..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] rounded-xl border-border focus:border-teal focus:ring-teal resize-none"
                  />
                </div>
              </div>

              {/* Right column - Appointment details */}
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Appointment Details
                </h3>

                {/* Service selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Select Service *
                  </label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="h-12 rounded-xl border-border focus:border-teal focus:ring-teal">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date picker */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal" />
                    Select Date *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal rounded-xl border-border hover:border-teal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date < new Date() || date.getDay() === 0
                        }
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time slot selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal" />
                    Select Time *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={cn(
                          "py-2 px-3 text-sm rounded-lg border transition-all duration-200",
                          time === slot
                            ? "bg-teal text-primary-foreground border-teal"
                            : "bg-background border-border hover:border-teal hover:bg-teal-light"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-pulse">Booking...</span>
                    </>
                  ) : (
                    <>
                      Confirm Appointment
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
