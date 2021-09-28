import { IoMdArrowRoundBack } from 'react-icons/io';
import { FiMapPin } from 'react-icons/fi';
import { GiTakeMyMoney, GiReceiveMoney } from 'react-icons/gi';
import { FiInfo } from 'react-icons/fi';
import { BsPeopleFill, BsHouseDoor } from 'react-icons/bs';
import { FaParking } from 'react-icons/fa';
import { MdPets, MdSmokingRooms, MdLocalLaundryService } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';
import {IoFilterCircleSharp} from 'react-icons/io5'
import { AiOutlineWifi, AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { BiFridge, BiDoorOpen } from 'react-icons/bi';
import { RiTempColdLine, RiMovieLine, RiFridgeFill } from 'react-icons/ri';
import { IoMdContact } from 'react-icons/io';
import { HiOutlineIdentification } from 'react-icons/hi';


const Navdata = [
  {
    name: 'Condo/Apart',
    Link: '/rentcondo',
    subtitle: 'Room rent for condo',
  },
  {
    name: 'House',
    Link: '/renthouse',
    subtitle: 'Room rent for house',
  },
  {
    name: 'Long term Rent',
    Link: '/rentlongterm',
    subtitle: 'Whole Condo or house',
  },
  {
    name: 'Short term Rent',
    Link: '/rentshortterm',
    subtitle: 'Whole Condo or house',
  },
];

const Footerdata = {
  title: 'ON ROOM',
  tel: '647-530-8134',
  email: 'rudwo8134@gmail.com',
  Address: '19 Western Battery Road, Toronto, ON',

  cutomerserviceemail: 'rudwo8134@gmail.com',
  cutomerservicephone: '647-530-8134',
  copyright: ` Copyright © ONROOM. All Rights Reserved at ${new Date().getFullYear()}.`,
};

const Filterdata = {
  title: 'Search by Filter',
  filtericon: <IoFilterCircleSharp />,
  payment: 'Monthly Fee',
  paymenticon: <GiTakeMyMoney />,
  Category: [

    {
      name: 'Parking',
      icon: <FaParking />,
    },
    {
      name: 'Pet',
      icon: <MdPets />,
    },
    {
      name: 'Smoking',
      icon: <MdSmokingRooms />,
    },
    {
      name: 'Internet',
      icon: <AiOutlineWifi />,
    },
    {
      name: 'Kitchen',
      icon: <CgSmartHomeCooker />,
    },
    {
      name: 'Laundry',
      icon: <MdLocalLaundryService />,
    },
    {
      name: 'Dryer',
      icon: <MdLocalLaundryService />,
    },
    {
      name: 'Fridge',
      icon: <BiFridge />,
    },
    {
      name: 'Freezer',
      icon: <RiFridgeFill />,
    },
  ],
};

export { Navdata, Footerdata, Filterdata };
