declare module "*.module.scss" 

declare module "assets/default/sprite/*.svg" {
  const icon: {
    id: string;
    viewBox: string;
    content: string;
  };
  export default icon;
}
