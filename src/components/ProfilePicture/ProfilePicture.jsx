import { motion } from 'framer-motion';
import Kevin from '../../assets/Kevin.jpg'

const ProfilePicture = () => (
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{ scale: 1.1 }}
    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    className="profile-picture"
  >
    <img src={Kevin} alt="Profile" />
  </motion.div>
);

export default ProfilePicture;