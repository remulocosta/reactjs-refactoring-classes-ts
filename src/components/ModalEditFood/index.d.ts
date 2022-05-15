import { IFood } from "../../pages/Dashboard/index.d";


interface IModalEditFoodProps {
    handleUpdateFood(food: IFood): void;
    setIsOpen(): void;
    isOpen: boolean;
    editingFood: IFood;
}

export {
    IModalEditFoodProps
}
