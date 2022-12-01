import local from '@/assets/images/8690bb321356070e0b8c4404d087f8fd.png';

export default defineNuxtRouteMiddleware((to, from) => {
  const local_image = localImage();
  const online_image = onlineImage();
  setTimeout(() => {
    local_image.value = local;
    online_image.value = 'https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png';
  }, 1000);
});
