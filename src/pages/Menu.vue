<template>
    <div>
        <ul>
            <li>
                <router-link to="/menu/submenu">测试子菜单</router-link>
            </li>
            <li>
                <router-link to="/menu/submenu1">测试子菜单1</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>