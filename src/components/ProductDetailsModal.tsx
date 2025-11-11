import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductDetailsModalProps {
  product: Product | null;
  categoryName: string;
  categoryPath: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  categoryName,
  categoryPath,
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  if (!product) return null;

  const renderStars = (rating: number = 0) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }
          />
        ))}
      </div>
    );
  };

  const handleViewCategory = () => {
    onClose();
    navigate(categoryPath);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        {/* Product Image */}
        <div className="relative w-full h-80 bg-gradient-to-b from-gray-50 to-white rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4 pt-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-progressive-dark-grey">
            {product.name}
          </DialogTitle>

          {/* Rating and Category */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {product.rating && (
              <div className="flex items-center gap-2">
                {renderStars(product.rating)}
                <span className="text-sm font-semibold text-gray-700">
                  {product.rating}
                </span>
              </div>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-progressive-red/10 text-progressive-red w-fit">
              {categoryName}
            </span>
          </div>

          {/* Description */}
          <DialogDescription className="text-base text-gray-600 leading-relaxed">
            {product.description}
          </DialogDescription>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {/* Primary: Buy Now Button */}
            <Button
              onClick={() => {
                const buyNowLink = ""; // Empty for now - will be updated later
                if (buyNowLink) {
                  window.open(buyNowLink, '_blank');
                }
              }}
              className="w-full bg-gradient-to-r from-progressive-red to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              Buy Now
            </Button>
            
            {/* Secondary: View Full Collection Button */}
            <Button
              onClick={handleViewCategory}
              variant="outline"
              className="w-full border-2 border-progressive-red text-progressive-red hover:bg-progressive-red/5 font-semibold py-6 text-base"
            >
              View Full {categoryName} Collection
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
