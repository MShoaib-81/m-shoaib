import profilePhoto from "@/assets/profile-photo.png";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  const skills = [
    'Deep Learning', 'Computer Vision', 'NLP', 'Healthcare AI', 
    'Explainable AI', 'Medical Imaging', 'Mental Health Tech', 
    'Research', 'Python', 'TensorFlow', 'PyTorch'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-16 gradient-text">About Me</h2>
          </ScrollReveal>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Profile Image - Large Card */}
            <ScrollReveal className="lg:col-span-4" delay={100}>
              <div className="glass-card-hover h-full p-6 flex items-center justify-center">
                <div className="w-full max-w-[280px] aspect-[3/4] rounded-xl overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Muhammad Shoaib" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            {/* Main Bio - Large Card */}
            <ScrollReveal className="lg:col-span-8" delay={200}>
              <div className="glass-card-hover h-full p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  AI Researcher & Developer
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am an AI student and researcher passionate about machine learning, deep learning, 
                  and their applications in healthcare and intelligent systems. My work focuses on 
                  building socially impactful solutions—from Alzheimer's detection with multimodal 
                  data to mental health and emotion recognition systems—with a strong emphasis on 
                  <span className="text-primary font-semibold"> Explainable AI (XAI)</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With hands-on experience in <span className="text-secondary font-semibold">computer vision</span>, 
                  <span className="text-secondary font-semibold"> NLP</span>, and 
                  <span className="text-secondary font-semibold"> audio-based analysis</span>, I explore the 
                  intersection of cutting-edge research and real-world usability.
                </p>
              </div>
            </ScrollReveal>

            {/* Education Card */}
            <ScrollReveal className="lg:col-span-6" delay={300}>
              <div className="glass-card-hover p-6">
                <div className="text-secondary text-sm font-medium mb-2 uppercase tracking-wider">Education</div>
                <h4 className="text-xl font-bold text-foreground mb-2 font-display">
                  Bachelor's in Artificial Intelligence
                </h4>
                <p className="text-muted-foreground">
                  Aror University Sukkur <span className="text-primary">(2023–2027)</span>
                </p>
              </div>
            </ScrollReveal>

            {/* Focus Areas Card */}
            <ScrollReveal className="lg:col-span-6" delay={400}>
              <div className="glass-card-hover p-6">
                <div className="text-secondary text-sm font-medium mb-2 uppercase tracking-wider">Focus Areas</div>
                <h4 className="text-xl font-bold text-foreground mb-2 font-display">
                  Research & Development
                </h4>
                <p className="text-muted-foreground">
                  Medical diagnostics, fake news detection, interactive chatbots, and sign language recognition.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Skills Pills */}
          <ScrollReveal delay={500}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="skill-pill"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;