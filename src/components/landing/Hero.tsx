import ScrambleText from "../effects/ScrambleText";;
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex-col-reverse">
      <div className="flex flex-col md:flex-row gap-(--space-l) justify-between mt-(--space-m)">
        <div className="inline-block md:justify-start mx-auto text-center">
            <ScrambleText className="xl:text-[300px] md:text-[20vw] text-[30vw] font-bold text-green no_line_height w-fit ">
              <span className="glow glow-green-lg">SOS14</span>
            </ScrambleText>
        </div>
        <motion.div className="flex items-center">
          <p className="text-1 md:text-left text-center text-white/60">
            Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
            We will take you through Python programming fundamentals
          </p>
        </motion.div>
      </div>
    </div>
  );
}
