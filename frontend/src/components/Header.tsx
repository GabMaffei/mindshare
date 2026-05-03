import { useAuthStore } from "@/stores/auth"
import logoIcon from '@/assets/logo-icon.svg'

export function Header() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, isAuthenticated } = useAuthStore()
    
    return (
        <div>
            {isAuthenticated && <div className="flex justify-between w-full">
                <div className="min-w-48">
                    <img src={logoIcon} />
                </div>

            </div>
            }
        </div>
    )
}