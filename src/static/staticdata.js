import { GiTakeMyMoney,} from 'react-icons/gi';
import { FaParking } from 'react-icons/fa';
import { MdPets, MdSmokingRooms, MdLocalLaundryService } from 'react-icons/md';
import {IoFilterCircleSharp} from 'react-icons/io5'
import { AiOutlineWifi} from 'react-icons/ai';
import { CgSmartHomeCooker } from 'react-icons/cg';
import { BiFridge } from 'react-icons/bi';
import { RiFridgeFill } from 'react-icons/ri';



const Navdata = [
  {
    name: '방구하기',
    Link: '/rentcondo',
    subtitle: 'About Us',
  },
  {
    name: '방올리기',
    Link: '/rentcondo',
    subtitle: 'Room rent for condo',
  },
  {
    name: '고객센터',
    Link: '/renthouse',
    subtitle: 'Room rent for house',
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
