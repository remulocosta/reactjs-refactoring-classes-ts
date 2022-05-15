import { IFood } from "../../pages/Dashboard/index.d";


interface IModalAddFoodProps {
    setIsOpen(): void;
    handleAddFood(food: IFood): void;
    isOpen: boolean;
}

export {
    IModalAddFoodProps
}
