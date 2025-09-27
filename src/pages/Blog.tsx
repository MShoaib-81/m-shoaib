import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: "Literature Review" | "Project Report" | "Research Paper";
  tags: string[];
  pdfUrl?: string;
  status: "Published" | "Draft";
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Explainable AI in Medical Diagnosis: A Comprehensive Literature Review",
      excerpt: "An in-depth analysis of current XAI techniques in healthcare, focusing on interpretability methods for deep learning models in medical imaging and diagnosis.",
      content: `# Explainable AI in Medical Diagnosis: A Comprehensive Literature Review

## Abstract

The integration of artificial intelligence in medical diagnosis has shown promising results, but the "black box" nature of deep learning models raises concerns about transparency and trust. This literature review examines current approaches to explainable AI in medical applications.

## 1. Introduction

Explainable AI (XAI) has emerged as a critical field addressing the interpretability of machine learning models, particularly in high-stakes domains like healthcare. The need for transparency in medical AI systems is driven by regulatory requirements, clinical acceptance, and patient safety considerations.

## 2. Current XAI Techniques in Medical Imaging

### 2.1 Gradient-based Methods
- **Grad-CAM**: Provides visual explanations for CNN decisions in medical image classification
- **Integrated Gradients**: Offers more stable attribution scores for complex medical imaging tasks

### 2.2 Perturbation-based Methods
- **LIME**: Local explanations for individual medical image predictions
- **SHAP**: Unified approach to feature importance in medical diagnosis

## 3. Challenges and Future Directions

The field faces several challenges including:
- Balancing model accuracy with interpretability
- Standardizing evaluation metrics for explanation quality
- Integrating XAI into clinical workflows

## 4. Conclusion

While significant progress has been made, the field requires continued research to develop XAI methods that are both technically sound and clinically useful.

## References

[1] Ribeiro, M.T., Singh, S., & Guestrin, C. (2016). "Why Should I Trust You?": Explaining the Predictions of Any Classifier.
[2] Selvaraju, R.R., et al. (2017). Grad-CAM: Visual Explanations from Deep Networks via Gradient-based Localization.
[3] Lundberg, S.M. & Lee, S.I. (2017). A Unified Approach to Interpreting Model Predictions.`,
      date: "2024-03-15",
      readTime: "12 min read",
      category: "Literature Review",
      tags: ["XAI", "Medical AI", "Deep Learning", "Healthcare"],
      status: "Published"
    },
    {
      id: "2",
      title: "Multimodal Alzheimer's Detection: Technical Report",
      excerpt: "Technical implementation details and results of our multimodal approach combining MRI imaging and clinical text data for early Alzheimer's detection.",
      content: `# Multimodal Alzheimer's Detection: Technical Report

## Executive Summary

This technical report presents our approach to early Alzheimer's disease detection using a multimodal framework that combines MRI neuroimaging data with clinical text narratives.

## 1. Methodology

### 1.1 Data Sources
- **MRI Data**: 3D T1-weighted structural MRI scans from ADNI dataset
- **Clinical Text**: Medical reports and cognitive assessments
- **Demographics**: Age, gender, education level, APOE genotype

### 1.2 Model Architecture
Our multimodal architecture consists of:
- **Vision Branch**: 3D CNN for MRI feature extraction
- **Text Branch**: BERT-based transformer for clinical text encoding
- **Fusion Module**: Late fusion with attention mechanism

## 2. Experimental Setup

### 2.1 Dataset Split
- Training: 1,200 subjects
- Validation: 300 subjects  
- Testing: 400 subjects

### 2.2 Evaluation Metrics
- Accuracy: 87.3%
- Sensitivity: 89.1%
- Specificity: 85.6%
- AUC-ROC: 0.924

## 3. Results and Analysis

The multimodal approach significantly outperformed single-modality baselines:
- MRI-only: 82.1% accuracy
- Text-only: 79.4% accuracy
- Multimodal: 87.3% accuracy

## 4. Explainability Analysis

We implemented Grad-CAM for MRI interpretability and attention visualization for text components, providing clinicians with insight into model decision-making processes.

## 5. Limitations and Future Work

- Limited diversity in training data
- Need for longitudinal validation
- Integration with clinical workflows

## Conclusion

Our multimodal approach demonstrates the potential of combining diverse data sources for improved diagnostic accuracy while maintaining interpretability.`,
      date: "2024-02-28",
      readTime: "8 min read",
      category: "Project Report",
      tags: ["Alzheimer's", "Multimodal", "Deep Learning", "Medical Imaging"],
      pdfUrl: "#",
      status: "Published"
    },
    {
      id: "3",
      title: "Transformer Architectures for Sentiment Analysis: A Comparative Study",
      excerpt: "Comprehensive comparison of BERT, RoBERTa, and DistilBERT for sentiment analysis tasks, including fine-tuning strategies and performance evaluation.",
      content: `# Transformer Architectures for Sentiment Analysis: A Comparative Study

## Abstract

This study presents a comprehensive comparison of transformer-based models for sentiment analysis, evaluating BERT, RoBERTa, and DistilBERT across multiple datasets and domains.

## 1. Introduction

Sentiment analysis has benefited significantly from the transformer revolution. This paper evaluates three prominent architectures across diverse sentiment analysis tasks.

## 2. Models and Methodology

### 2.1 Model Architectures
- **BERT**: Bidirectional encoder representations
- **RoBERTa**: Robustly optimized BERT approach
- **DistilBERT**: Distilled version for efficiency

### 2.2 Datasets
- IMDB Movie Reviews
- Stanford Sentiment Treebank
- Amazon Product Reviews
- Twitter Sentiment140

## 3. Experimental Results

### 3.1 Performance Comparison
| Model | IMDB | SST-2 | Amazon | Twitter |
|-------|------|-------|--------|---------|
| BERT | 93.2% | 91.8% | 89.4% | 85.7% |
| RoBERTa | 94.1% | 92.5% | 90.2% | 86.3% |
| DistilBERT | 91.8% | 90.3% | 87.9% | 84.2% |

### 3.2 Efficiency Analysis
DistilBERT achieved 97% of BERT's performance while being 60% smaller and 2x faster.

## 4. Fine-tuning Strategies

We evaluated various fine-tuning approaches:
- Full model fine-tuning
- Gradual unfreezing
- Task-adaptive pretraining

## 5. Conclusion

RoBERTa demonstrated superior performance across most tasks, while DistilBERT offers an excellent efficiency-performance trade-off for resource-constrained deployments.`,
      date: "2024-01-20",
      readTime: "10 min read",
      category: "Research Paper",
      tags: ["Transformers", "BERT", "Sentiment Analysis", "NLP"],
      pdfUrl: "#",
      status: "Published"
    },
    {
      id: "4",
      title: "Computer Vision Approaches in Sign Language Recognition: State of the Art",
      excerpt: "Literature review covering recent advances in computer vision techniques for sign language recognition, including CNN architectures and temporal modeling approaches.",
      content: "",
      date: "2024-01-05",
      readTime: "15 min read",
      category: "Literature Review",
      tags: ["Computer Vision", "Sign Language", "CNN", "Action Recognition"],
      status: "Draft"
    }
  ];

  const publishedPosts = blogPosts.filter(post => post.status === "Published");

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-surface border-b border-border">
          <div className="container mx-auto px-6 py-8">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedPost(null)}
              className="mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
            
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">
                {selectedPost.category}
              </Badge>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {selectedPost.pdfUrl && (
                <Button variant="outline" className="mb-8">
                  <ExternalLink size={16} className="mr-2" />
                  Download PDF
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl prose prose-lg dark:prose-invert">
            <div className="whitespace-pre-wrap text-foreground leading-relaxed">
              {selectedPost.content}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Research Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Literature reviews, project reports, and research papers on AI/ML topics.
              Documenting my journey through the evolving landscape of artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Link */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/">
          <Button variant="ghost">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {publishedPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedPost(post)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                    {post.pdfUrl && (
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={14} className="mr-1" />
                        PDF
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;