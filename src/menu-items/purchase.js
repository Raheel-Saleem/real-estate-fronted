import StoreIcon from '@material-ui/icons/Store';
const icons = {
    StoreIcon
};
export const purchase = {
    id: 'purchaseGroup',
    title: 'Purchase',
    type: 'group',
    children: [
        {
            id: 'purchaseCollapes',
            title: 'Purchase Plots',
            type: 'collapse',
            icon: icons['StoreIcon'],
            children: [
                {
                    id: 'purchase-plots',
                    title: 'Purchase Plots',
                    type: 'item',
                    // icon: icons['AccountBoxIcon'],
                    url: '/?plot=buy'
                    // target: true
                },
                {
                    id: 'purchase-plots-summary',
                    title: 'Purchase Plots Summary',
                    type: 'item',
                    // icon: icons['AccountBoxIcon'],
                    url: '/purchase-summary'
                    // target: true
                },
                {
                    id: 'purchase-token-plot',
                    title: 'Purchase Token Plots',
                    type: 'item',
                    // icon: icons['AccountBoxIcon'],
                    url: '/purchase-token-plot'
                    // target: true
                },
            ]
        }
    ]
};
