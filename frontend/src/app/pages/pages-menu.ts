import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Home Page',
    icon: {icon:'home-outline',options: {animation:{ type: 'pulse', infinite: true }}},
    link: '/pages/home',
    home: true,
    
  },
  {
    title: 'E-commerce',
    icon: {icon:'shopping-cart-outline',options: {animation:{ type: 'shake' }, }},
    link: '/pages/dashboard',
    
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Stock',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Stock Table',
        link: '/pages/stock/stock-table',
      },
      {
        title: 'Reports',
        link: '/pages/stock/reports',
      },
      {
        title: 'Chart',
        link: '/pages/stock/stock-chart',
      },
    ],
  },
  {
    title: 'Machines',
    icon: 'car-outline',
    children: [
      {
        title: 'Machines List',
        link: '/pages/machines/machine',
      },
      {
        title: 'Prevention',
        link: '/pages/machines/prevention',
      },
      {
        title: 'Correction',
        link: '/pages/machines/correction',
      },
      
    ],
  },
  {
    title: 'Work Order ',
    icon: 'attach-outline',
    children: [
      {
        title: 'Work Order',
        link: '/pages/work-order/workorder',
      },
      {
        title: 'Enqueue',
        link: '/pages/work-order/enqueue',
      },
     
    ],
  },
  {
    title: 'Equipements',
    icon: "settings-outline",
    children: [
      {
        title: 'Equipements List',
        link: '/pages/equipements/equipement',
      },
     
      {
        title: 'Assign',
        link: '/pages/equipements/assign',
      },
    ],
  },
  {

    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
{
    title: 'Workers',
    icon: "settings-outline",
    link: '/pages/workers/worker',

    // children: [
    //   {
    //     title: 'Equipements List',
    //     link: '/pages/equipements/equipement',
    //   },
     
    //   {
    //     title: 'Assign',
    //     link: '/pages/equipements/assign',
    //   },
    // ],
  },
  {
    title: 'Synthesis',
    icon: "settings-outline",
    link: '/pages/synthesis/synthese',    
  },
  {
    title: 'OEE',
    icon: "settings-outline",
    link: '/pages/oee/oee-synthese',    
  },
  {
    title: 'MTTR',
    icon: "settings-outline",
    link: '/pages/mttr/mttr-synthesis',    
  },
  

];
