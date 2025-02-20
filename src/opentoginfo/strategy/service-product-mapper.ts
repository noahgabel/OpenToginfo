import { Train } from '@/models/mit-tog-departures.model';

export function mapMitTogToServiceProduct(Train: Train): ServiceProduct {
  const { primaryColor, secondaryColor } = getColors(Train);

  const serviceProduct: ServiceProduct = {
    trainId: Train.TrainId,
    friendlyName: Train.Product + ' ' + Train.PublicTrainId,
    primaryColor,
    secondaryColor,
  };

  return serviceProduct;
}

function getColors(train: Train): {
  primaryColor: string;
  secondaryColor: string;
} {
  switch (train.Product.toUpperCase()) {
    case 'RE':
      return {
        primaryColor: 'rgb(71, 164, 64)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    case 'ØP':
      return {
        primaryColor: 'rgb(71, 164, 64)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    case 'RØ':
      return {
        primaryColor: 'rgb(71, 164, 64)',
        secondaryColor: 'rgb(255, 255, 255)',
      };
    default:
      return {
        primaryColor: 'rgb(128, 128, 128)',
        secondaryColor: 'rgb(169, 169, 169)',
      };
  }
}
