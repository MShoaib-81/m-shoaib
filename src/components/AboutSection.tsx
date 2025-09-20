import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">About Me</h2>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-12">
            <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-xl">
              <AvatarImage src={profilePhoto} alt="Muhammad Shoaib" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold bg-primary/10 text-primary">MS</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="prose prose-lg mx-auto text-surface-foreground leading-relaxed">
            <p className="text-xl mb-6">
              I am an AI student and researcher passionate about machine learning, deep learning, 
              and their applications in healthcare and intelligent systems. My work focuses on 
              building socially impactful solutions—from Alzheimer's detection with multimodal 
              data to mental health and emotion recognition systems—with a strong emphasis on 
              <span className="text-primary font-semibold"> Explainable AI (XAI)</span>.
            </p>
            
            <p className="text-lg mb-6">
              With hands-on experience in <span className="text-secondary font-semibold">computer vision</span>, 
              <span className="text-secondary font-semibold"> NLP</span>, and 
              <span className="text-secondary font-semibold"> audio-based analysis</span>, I explore the 
              intersection of cutting-edge research and real-world usability. My projects range from 
              medical diagnostics and fake news detection to interactive chatbots and sign language 
              recognition, always with the goal of creating accessible and transparent AI systems.
            </p>
            
            <p className="text-lg">
              Currently, I am pursuing a <span className="text-primary font-semibold">Bachelor's in Artificial Intelligence</span> at 
              <span className="text-primary font-semibold"> Aror University Sukkur</span> (2023–2027), while actively 
              contributing to research projects and collaborations that highlight the transformative 
              role of AI in healthcare, mental well-being, and beyond.
            </p>
          </div>
          
          {/* Skills/Interests Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              'Deep Learning', 'Computer Vision', 'NLP', 'Healthcare AI', 
              'Explainable AI', 'Medical Imaging', 'Mental Health Tech', 
              'Research', 'Python', 'TensorFlow', 'PyTorch'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;