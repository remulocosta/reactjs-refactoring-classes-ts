import { IFood } from "../../pages/Dashboard";

interface IContainerProps {
    available: boolean;
 }

interface IFoodProps {
    food: IFood;
    handleEditFood(food: IFood): void;
    handleDelete(id: number): void;
}

export {
    IContainerProps,
    IFoodProps,
}
