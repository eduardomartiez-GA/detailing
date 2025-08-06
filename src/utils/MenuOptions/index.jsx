/**
 * MenuOptions.jsx
 **/
import { MdOutlineDesignServices } from 'react-icons/md'
import { GiSpectacleLenses } from 'react-icons/gi'
import { FaCarSide } from "react-icons/fa";
import { FaFreebsd } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";

export const MenuOptions = [
  {
    id: 'inicio',
    icon: AiFillHome,
    tag: 'Inicio',
    url: '/',
    type: 'normal',
  },
  {
    id: 'reportes',
    icon: FaCarSide,
    tag: 'Reportes',
    url: '/reportes',
    type: 'accordion',
    subItems: [
      { id: 'evidencias', icon: MdOutlineDesignServices, tag: 'Evidencias', url: '/reportes/evidencias' },
      { id: 'rechazos', icon: GiSpectacleLenses, tag: 'Rechazos', url: '/reportes/rechazos' },
    ],
  },
  {
    id: 'deportes',
    icon: FaCrown,
    tag: 'Deportes',
    url: '/deportes',
    type: 'accordion',
    subItems: [
      { id: 'evidencias', icon: FaFreebsd, tag: 'Evidencias', url: '/deportes/evidencias' },
      { id: 'rechazos', icon: FaFire, tag: 'Rechazos', url: '/deportes/rechazos' },
    ],
  },
]
