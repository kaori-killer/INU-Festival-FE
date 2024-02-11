import BoothDay from './BoothDay';
import boothImg from './boothImg';

interface Booth {
    id: string;
    name: string;
    category: string;
    department: string;
    location: string;
    description: string;
    liked: number;
    img: string;
    boothDays: BoothDay[];
    boothImgs: boothImg[];
  }

export default Booth;
