import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
 
  {
    title: 'Home Page',
    icon: {icon:'home-outline',options: {animation:{ type: 'pulse', infinite: true }}},
    link: '/pages/home',
    home: true,
    
  },
  {
    title: 'Profile',
    icon: {icon:'person-outline',options: {animation:{ type: 'pulse', infinite: true }}},
    link: '/pages/profile',
    
  },
  // {
  //   title: 'Chat Room',
  //   icon: {icon:'message-square-outline',options: {animation:{ type: 'zoom', infinite: true }}},
  //   link: '/pages/chat',
    
  // },
 
  {
    title: 'Charts',
    group: true,
  },
  {
    title: 'History Interventions Chart',
    icon: {icon:'activity-outline',options: {animation:{ type: 'zoom', infinite: true }}},
    link: '/pages/charts/chartsHistory',
  },
  // {
  //   title: 'Chart1',
  //   icon: {icon:'pie-chart-outline',options: {animation:{ type: 'zoom', infinite: true }}},
  //   link: '/pages/charts/echarts',
  // },
  {
    title: 'AFNOR Chart',
    icon: {icon:'bar-chart-2',options: {animation:{ type: 'zoom', infinite: true }}},
    link: '/pages/charts/echartsAFNOR',
  },
  
  {
    title: 'General',
    group: true,
  },
  //{
  //   title: 'Forms',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  {
    title: 'Stock',
    icon: 'shopping-cart',
    children: [
      {
        title: 'Stock Table',
        link: '/pages/stock/stock-table',
      },
      {
        title: 'Reports',
        link: '/pages/stock/reports',
      },
      // {
      //   title: 'Chart',
      //   link: '/pages/stock/stock-chart',
      // },
    ],
  },
  {
    title: 'Machines',
    icon: 'car',
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
    icon: 'person-done',
    children: [
      {
        title: 'Work Order',
        link: '/pages/work-order/workorder',
      },
      {
        title: 'Enqueue',
        link: '/pages/work-order/enqueue',
      },
      {
        title: 'Intervention Form',
        link: '/pages/work-order/work-download',
      },
    ],
  },
  {
    title: 'Equipements',
    icon: "layers",
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
  // {

  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

{

    title: 'Workers',
    icon: "person",
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
    icon: "sync",
    link: '/pages/synthesis/synthese',
        
  },
  {
    title: 'Interventions History',
    icon: "repeat",
    //link: '/pages/interventions/intervention',
    children: [    
     
      {
        title: 'Actions history',
        link: '/pages/interventions/actions',
      },
      {
        title: 'Tableau Ratio1',
        link: '/pages/interventions/ratio1',
      },
      // {
      //   title: 'Tableau Ratio2',
      //   link: '/pages/interventions/ratio2',
      // },
      // {
      //   title: 'Tableau Ratio3',
      //   link: '/pages/interventions/ratio3',
      // },
      // {
      //   title: 'Tableau Ratio4',
      //   link: '/pages/interventions/ratio4',
      // }
    ],
        
  },
  {
    title: 'OEE',
    icon: "save",
    children: [
      
      {
        title: 'Availability',
        link: '/pages/oee/availability',
      },
      {
        title: 'Quality',
        link: '/pages/oee/quality',
      },
      {
        title: 'Performance',
        link: '/pages/oee/performance',
      },
   
      
    ],
        
  },
  {
    title: 'MTTR',
    icon: "trending-up",
    link: '/pages/mttr/mttr-synthesis',    
  },

  {
    title: 'MTBF',
    icon: "settings-2",
    link: '/pages/mtbf/mtbf-synthesis',    
  },
  {
    title: 'Projects',
    icon: "folder-add",
    link: '/pages/projects/project',    
  },

 {
    title: 'AFNOR Standard Ratios',

    icon: "flash",
    children: [
      {
        title: 'Ratio 1',
        link: '/pages/totalSynthesis/ratio1',
      },
     
      {
        title: 'Ratio 2',
        link: '/pages/totalSynthesis/ratio2',
      },
      {
        title: 'Ratio3 ',
        link: '/pages/totalSynthesis/ratio3',
      },
      {
        title: 'Ratio4 ',
        link: '/pages/totalSynthesis/ratio4',
      },
     
    ],
  }

  

];
