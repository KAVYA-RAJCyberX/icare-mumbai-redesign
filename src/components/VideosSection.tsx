import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const videos = [
  {
    title: "Management Of Repetitive Stress Injury",
    thumbnail: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/918/health-package/Management%20Of%20Repetitive%20Stress%20Injury.png",
    youtubeUrl: "https://www.youtube.com/watch?v=FACYarTgRbg",
    channel: "Kokilaben Dhirubhai Ambani Hospital",
    duration: "4:05",
  },
  {
    title: "Ergonomic Guidelines For Desk-based Work",
    thumbnail: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/918/health-package/76.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dIWoQADiyEY",
    channel: "Kokilaben Dhirubhai Ambani Hospital",
    duration: "4:28",
  },
  {
    title: "Pain and Rehabilitation Specialist - Treating Pain and Pathology",
    thumbnail: "https://uat-icareheal.s3.ap-south-1.amazonaws.com/uatwebcontent/918/health-package/Pain%20and%20Rehabilation%20Specialist%20Treating%20Pain%20and%20Pathology.png",
    youtubeUrl: "https://www.youtube.com/watch?v=uz0eV7elX-Y",
    channel: "GIBSOCIETY",
    duration: "1:49",
  },
];

export const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-teal-light text-teal text-sm font-medium rounded-full mb-4">
            Videos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Latest Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational content to help you understand pain management better
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-primary-foreground text-xs font-medium rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-teal transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{video.channel}</p>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-teal transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
