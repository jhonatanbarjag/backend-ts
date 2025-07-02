
import UserRepository  from "../repository/user.repository";
import { encrypt, compare} from "../utils/encrypt";

interface CreateUserDTO {
    email: string;
    password: string;
    name: string;
    active?: boolean;
    verified?: boolean;
}

class UserService{
    
    async getAll() {
        return UserRepository.findAll();
    }
    async getById(id: string) {
        return UserRepository.findById(id);
    }
    async create(createDTO: CreateUserDTO) {
        const hashed = await encrypt(createDTO.password); // Encriptar la contraseña antes de guardarla
        // Si la contraseña ya está encriptada, no es necesario encriptarla de nuevo
        return UserRepository.create({
            ...createDTO,
            password: hashed, // Guardar la contraseña encriptada
        });
    }
    async update(_id: string,  updateDTO: Partial<CreateUserDTO>){
        return UserRepository.update(_id, updateDTO);
    }
    async remove(id: string) {
        return UserRepository.delete(id);
    }
    async getTodosByUser(user: string) {
        return UserRepository.getTodosByUser(user);
    }
    async login(email: string, password: string) {
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const correct = await compare(password, user.password ?? ""); // Comparar la contraseña ingresada con la almacenada
        return correct;
    }
        
}
const userService = new UserService();
export default userService;