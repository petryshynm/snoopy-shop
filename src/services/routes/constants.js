import { Account } from "../../layouts/account"
import { Admin } from "../../layouts/admin"
import { Cart } from "../../layouts/cart"

export const protectedRoutes = [
    {
        path: 'admin',
        permission: "Admin",
        render: <Admin/>
    },
    {
        path: 'account',
        permission: "User",
        render: <Account/>
    },
    {
        path: 'account/cart',
        permission: "User",
        render: <Cart/>
    },
]