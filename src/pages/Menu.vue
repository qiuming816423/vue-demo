<template>
    <div>
        <ul>
            <li>
                <router-link to="/menu/submenu">子菜单</router-link>
            </li>
            <li>
                <router-link to="/menu/submenu1">子菜单1</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>