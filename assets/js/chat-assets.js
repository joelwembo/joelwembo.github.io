var MAX_CHAT_IMAGES = 4;

var portfolioAssets = [
  { keywords: ['cicd', 'ci/cd', 'jenkins', 'argocd', 'devops', 'pipeline'], image: 'assets/images/pic-1.png', title: 'End-to-End CI/CD DevOps with Jenkins, Docker, Kubernetes, ArgoCD, Github Actions, AWS EC2 and Terraform' },
  { keywords: ['serverless', 'api', 'lambda', 'database'], image: 'assets/images/1.jpg', title: 'Serverless API and Database Integration' },
  { keywords: ['cicd', 'ci/cd', 'jenkins', 'ansible', 'cloudfront', 'terraform', 'frontend'], image: 'assets/images/CICDJenkinsArgoCD-1.png', title: 'End-to-End CI/CD Pipeline for Frontend to AWS CloudFront using Ansible, Jenkins and Terraform' },
  { keywords: ['eks', 'argocd', 'react', 'github actions', 'docker'], image: 'assets/images/dec-images-2.jpg', title: 'AWS EKS Deployment using Github Actions, Docker and ArgoCD for React Applications' },
  { keywords: ['terraform', 'cloudfront', 'route53', 's3', 'bucket'], image: 'assets/images/project-details.jpg', title: 'Terraform & Cloudfront, Route53 and S3 Bucket' },
  { keywords: ['django', 'ec2', 'deploy', 'python'], image: 'assets/images/project-7.jpg', title: 'Automating Django Deployment to AWS EC2' },
  { keywords: ['aws', 'sam', 'serverless', 'architecture'], image: 'assets/images/AWS-SAM-Architecture.png', title: 'AWS SAM Serverless Architecture' },
  { keywords: ['terraform', 'infrastructure', 'iac'], image: 'assets/images/Terraform-1.png', title: 'Terraform Infrastructure as Code' },
  { keywords: ['react', 'eks', 'argocd', 'kubernetes'], image: 'assets/images/react-eks-argocd-1.png', title: 'React EKS ArgoCD Deployment' },
  { keywords: ['django', 'kubernetes', 'jenkins', 'eks', 'cicd', 'ci/cd'], image: 'assets/images/End-to-End-CI-CD-django-kubernetes-jenkins-eks.png', title: 'End-to-End CI/CD Django Kubernetes Jenkins EKS' },
  { keywords: ['cloudfront', 'terraform', 'cdn'], image: 'assets/images/Terraform-Cloudfront-1.png', title: 'Terraform Cloudfront CDN Setup' },
  { keywords: ['grafana', 'monitoring', 'eks', 'observability'], image: 'assets/images/grafa-eks.png', title: 'Grafana EKS Monitoring & Observability' },
  { keywords: ['prodxcloud', 'prodx', 'platform', 'saas'], image: 'assets/images/prodx-01.png', title: 'ProdXCloud Platform' },
  { keywords: ['ansible', 'jenkins', 'terraform', 'automation'], image: 'assets/images/Ansible-Jenkins-terraform-1.png', title: 'Ansible Jenkins Terraform Automation' },
  { keywords: ['project', 'architecture', 'cloud'], image: 'assets/images/project-8.png', title: 'Cloud Architecture Project' }
];

function findMatchingAssets(query) {
  var q = query.toLowerCase();
  var matches = [];
  for (var i = 0; i < portfolioAssets.length; i++) {
    var asset = portfolioAssets[i];
    for (var j = 0; j < asset.keywords.length; j++) {
      if (q.indexOf(asset.keywords[j]) !== -1) {
        matches.push(asset);
        break;
      }
    }
  }
  return matches.slice(0, MAX_CHAT_IMAGES);
}

function escapeHTML(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function buildImageGalleryHTML(assets) {
  if (!assets.length) return '';
  var html = '<div class="chat-response-images">';
  for (var i = 0; i < assets.length; i++) {
    var safeTitle = escapeHTML(assets[i].title);
    html += '<div class="chat-response-image">' +
      '<img src="' + assets[i].image + '" alt="' + safeTitle + '" />' +
      '<div class="image-caption">' + safeTitle + '</div>' +
      '</div>';
  }
  html += '</div>';
  return html;
}
