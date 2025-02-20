import { Train } from '@/models/mit-tog-departures.model';

export function mapMitTogToServiceProduct(Train: Train): ServiceProduct {
  const { primaryColor, secondaryColor } = getColors(Train);

  const serviceProduct: ServiceProduct = {
    trainId: Train.TrainId,
    friendlyName: getProductName(Train.Product) + ' ' + Train.PublicTrainId,
    primaryColor,
    secondaryColor,
  };

  return serviceProduct;
}

function getColors(train: Train): {
  primaryColor: string;
  secondaryColor: string;
} {
  switch (getProductName(train.Product).toUpperCase()) {
    case 'RE':
      return {
        primaryColor: 'rgb(71, 164, 64)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    case 'IC':
      return {
        primaryColor: 'rgb(239 65 48)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    case 'ICL':
      return {
        primaryColor: 'rgb(253 186 88)',
        secondaryColor: 'rgb(0, 0, 0)',
      };
    case 'EC':
      return {
        primaryColor: 'rgb(42, 105, 150)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    default:
      return {
        primaryColor: 'rgb(128, 128, 128)',
        secondaryColor: 'rgb(169, 169, 169)',
      };
  }
}

function getProductName(product: string) {
  switch (product.toUpperCase()) {
    case 'RE':
      return 'Re';
    case 'ØP':
      return 'Re';
    case 'RØ':
      return 'Re';
    case 'L':
      return 'ICL';
    default:
      return product;
  }
}
